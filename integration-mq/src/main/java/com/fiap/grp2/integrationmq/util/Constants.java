package com.fiap.grp2.integrationmq.util;

public class Constants {
    //public static final long SLEEP_TIME_MILLIS = 60000l;
	public static final long SLEEP_TIME_MILLIS = 0l;

    public static final float TEMPERATURA_MIN = 0f;
    public static final float TEMPERATURA_MAX = 35f;
    public static final float UMIDADE_MIN = 15f;

    public static final String RABBITMQ_USERNAME = "RABBITMQ_USERNAME";
    public static final String RABBITMQ_PASSWD = "RABBITMQ_PASSWD";
    public static final String RABBITMQ_VIRTUAL_HOST = "RABBITMQ_VIRTUAL_HOST";

    public static final String RABBITMQ_EXCHANGE = "exchange.monitoracao";
    public static final String RABBITMQ_QUEUE = "queue.sensor";
    public static final String RABBITMQ_ROUTING_KEY = "temp-umid";

    /*
        Para configurar o Gmail como remetente, acesse:
        https://www.google.com/settings/security/lesssecureapps e ative 'Permitir aplicativos menos seguros'
    */
    public static final String GMAIL_SMTP = "smtp.gmail.com";
    public static final int GMAIL_PORT = 587;
    public static final String GMAIL_USERNAME = "grupo2.fiap@gmail.com";
    public static final String GMAIL_PASSWD = "senha-email-grupo2";

    public static final String EMAIL_DESTINO = "email.de.destino.aqui@email.com";

}

