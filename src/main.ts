import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("EAV Product API")
    .setDescription(
      "API for creating and retrieving products with dynamic attributes"
    )
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
  console.log("App running on http://localhost:3000");
  console.log("Swagger available at http://localhost:3000/api");
}
bootstrap();
