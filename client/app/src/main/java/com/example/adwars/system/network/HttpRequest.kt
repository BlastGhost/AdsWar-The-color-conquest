package com.example.adwars.system.network

import android.content.Context
import android.util.Log
import com.android.volley.Request
import com.android.volley.toolbox.JsonObjectRequest
import com.android.volley.toolbox.Volley
import com.example.adwars.data.CacheManager
import com.example.adwars.system.Utils
import org.json.JSONObject

class HttpRequest(
    private val method: Int,
    private val path: String,
    private val context: Context,
    private val onReceivedCallback: HttpCallback = {},
    private val body: JSONObject? = null
) {
    companion object {
        fun PAINT(context: Context, onReceivedCallback: HttpCallback = {}) = HttpRequest(Request.Method.POST, "paint", context, onReceivedCallback)

        const val REQUEST_TAG = "_GAME_REQUEST"
    }



    var response: JSONObject? = null
    private val queue = Volley.newRequestQueue(this.context)
    private val request: JsonObjectRequest = this.createRequest()



    private fun createRequest(): JsonObjectRequest {
        val body = this.baseBody()

        if (this.body != null)
            Utils.merge(body, this.body)


        val request = JsonObjectRequest(
            this.method,
            Network.HTTP_URL + this.path,
            body,
            { res ->
                Log.d("HTTP_REQUEST", res.toString())
                this.onReceivedCallback(res)
                this.response = res
            },
            { e ->
                Log.e("HTTP_REQUEST_ERROR", e.toString())
                e.printStackTrace()
            }
        )

        request.tag = REQUEST_TAG

        return request
    }

    fun baseBody(): JSONObject {
        return JSONObject(mapOf(
            "playerId" to CacheManager.getInstance().player?.id,
            "token" to CacheManager.getInstance().token
        ))
    }


    fun call() {
        Network.getInstance().addRequest(this.request)
    }
}
