FROM openjdk:11
VOLUME /tmp
EXPOSE 8081
ADD target/paxmatic-0.0.1-SNAPSHOT.jar crud.jar
ENTRYPOINT ["java","-jar","crud.jar"]