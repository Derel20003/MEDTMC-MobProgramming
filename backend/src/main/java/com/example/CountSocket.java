package com.example;

import io.quarkus.scheduler.Scheduled;

import javax.enterprise.context.ApplicationScoped;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.util.concurrent.ConcurrentHashMap;

import static java.util.Objects.requireNonNull;

@ServerEndpoint("/count/{name}")
@ApplicationScoped
public class CountSocket {

    ConcurrentHashMap<String,Session> sessions = new ConcurrentHashMap<>();

    @Scheduled(every="1s")
    void sendCount() {
        broadcast("1");
    }

    private void broadcast (String message) {
        sessions.values().forEach(session -> {
            session.getAsyncRemote().sendObject(message);
        });
    }

    @OnOpen
    public void onOpen(Session session, @PathParam("name") String name) {
        System.out.println("onOpen> " + name);
        sessions.put(name, session);
    }

    @OnClose
    public void onClose(Session session, @PathParam("name") String name) {
        System.out.println("onClose> " + name);
        sessions.remove(name, session);
    }

    @OnError
    public void onError(Session session, @PathParam("name") String name, Throwable throwable) {
        System.out.println("onError> " + name + ": " + throwable);
    }

    @OnMessage
    public void onMessage(String message, @PathParam("name") String name) {
        System.out.println("onMessage> " + name + ": " + message);
    }
}
