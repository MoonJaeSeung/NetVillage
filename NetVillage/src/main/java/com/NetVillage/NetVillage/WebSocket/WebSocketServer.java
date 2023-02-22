package com.NetVillage.NetVillage.WebSocket;

import org.springframework.stereotype.Service;

import javax.websocket.OnOpen;
import javax.websocket.server.ServerEndpoint;

@Service
//@Slf4j
@ServerEndpoint("/socket/Chat")
public class WebSocketServer {
//    public static Set<Session> clients = Collections.synchronizedSet(new HashSet<Session>());
//    private static Logger logger = LoggerFactory.getLogger(ChatService.class);

//    @OnOpen
//    public void onOpen(Session session) throws Exception{
//        logger.info("open session : {}, clients={}", session.toString(), clients);
//
//        if(!clients.contains(session)) {
//            clients.add(session);
//            logger.info("session open : {}", session);
//        }else{
//            logger.info("이미 연결된 session");
//        }
//    }

    @OnOpen
    public void onOpen() {
        System.out.println("웹소켓 연결 됐다....");
    }

//    @OnMessage
//    public void onMessage(String message, Session session) throws IOException {
//        logger.info("receive message : {}", message);
//
//        for (Session s : clients) {
//            logger.info("send data : {}", message);
//
//            s.getBasicRemote().sendText(message);
//        }
//    }
//
//    @OnClose
//    public void onClose(Session session){
//        logger.info("session close : {}", session);
//        clients.remove(session);
//    }

}