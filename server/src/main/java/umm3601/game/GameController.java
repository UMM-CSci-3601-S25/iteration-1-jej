package umm3601.game;

import java.util.Map;

import org.bson.UuidRepresentation;
import org.bson.types.ObjectId;
import org.mongojack.JacksonMongoCollection;

import com.mongodb.client.MongoDatabase;
import static com.mongodb.client.model.Filters.eq;


import io.javalin.Javalin;
import io.javalin.http.BadRequestResponse;
import io.javalin.http.Context;
import io.javalin.http.HttpStatus;
import io.javalin.http.NotFoundResponse;
import umm3601.Controller;



public class GameController implements Controller {

  private static final String API_GAME_BY_ID = "/api/game/{id}";
  private static final String API_GAMES = "/api/game/new";
  private static final String API_NUMBER_OF_GAMES = "/api/game/number";
  private final JacksonMongoCollection<Game> gameCollection;

  public GameController(MongoDatabase database) {
    gameCollection = JacksonMongoCollection.builder().build(
        database,
        "games",
        Game.class,
        UuidRepresentation.STANDARD);
  }

  public void getGame(Context ctx) {
    String id = ctx.pathParam("id");
    Game game;

    try {
      game = gameCollection.find(eq("_id", new ObjectId(id))).first();
    } catch (IllegalArgumentException e) {
      throw new BadRequestResponse("The requested game id wasn't a legal Mongo Object ID.");
    }
    if (game == null) {
      throw new NotFoundResponse("The requested game was not found");
    } else {
      ctx.json(game);
      ctx.status(HttpStatus.OK);
    }
  }

  public void addRoutes(Javalin server) {
    server.get(API_GAME_BY_ID, this::getGame);
    server.post(API_GAMES, this::addNewGame);
    server.get(API_NUMBER_OF_GAMES, this::numGames);
  }

  public void addNewGame(Context ctx) {
    Game newGame = ctx.bodyValidator(Game.class).get();
    // Add the new game to the database
    gameCollection.insertOne(newGame);

    ctx.json(Map.of("id", newGame._id));
    ctx.status(HttpStatus.CREATED);
  }

  public void numGames(Context ctx) {
    return;
  }
}
