FROM amazoncorretto:17-alpine

WORKDIR /app
COPY . .

COPY target/v1-0.0.1-SNAPSHOT.jar application.jar

ENTRYPOINT ["java", "-jar", "application.jar"]