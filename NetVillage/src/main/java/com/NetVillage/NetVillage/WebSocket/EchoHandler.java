package com.NetVillage.NetVillage.WebSocket;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class EchoHandler extends TextWebSocketHandler {

    // 로그인 중인 개별 유저 저장
    Map<String, WebSocketSession> users = new ConcurrentHashMap<String, WebSocketSession>();

    Gson gson = new Gson();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("afterConnectionEstablished:" + session);
        String[] uri = session.getUri().toString().split("/");
        users.put(uri[uri.length - 1], session);
        System.out.println(users.toString());

    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String payload = message.getPayload();
        System.out.println("Received message: " + payload);
        Map<String, Object> data = gson.fromJson(message.getPayload(), Map.class);
        System.out.println("객체 변환한 데이터"+data);
        System.out.println(data.get("talker"));

        if(data.get("talker") != null && users.containsKey(data.get("sendto"))) {
            System.out.println("데이터 뿌려짐");
            users.get(data.get("sendto")).sendMessage(new TextMessage(payload));
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("afterConnectionClosed:" + session + ":" + status);
    }

}
