package com.example.adwars.system.network

import android.content.Context
import com.android.volley.Request
import com.android.volley.RequestQueue
import com.android.volley.toolbox.Volley

class Network(
    context: Context
) {
    companion object {
        const val HTTP_PORT = 53_000
        const val SOCKET_PORT = 53_000

        const val IP_ADDRESS = "10.0.2.2"
        const val BASE_URL = "http://${IP_ADDRESS}"
        const val HTTP_URL = "$BASE_URL:$HTTP_PORT/game/"
        const val SOCKET_URL = "$BASE_URL:$SOCKET_PORT/"


        private var INSTANCE: Network? = null

        fun getInstance(): Network {
            return INSTANCE!!
        }
    }



    private val requestQueue: RequestQueue by lazy { Volley.newRequestQueue(context) }



    init {
        if (INSTANCE == null)
            INSTANCE = this
    }



    fun <T> addRequest(request: Request<T>) {
        requestQueue.add(request)
    }


    fun stop() {
        this.requestQueue.cancelAll(HttpRequest.REQUEST_TAG)
    }



}