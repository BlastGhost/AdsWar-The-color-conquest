package com.example.adwars.activities

import android.content.Intent
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.rounded.ArrowBack
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.TextUnitType
import androidx.compose.ui.unit.dp
import com.example.adwars.R
import com.example.adwars.ui.theme.AdWarsTheme

class Article() : ComponentActivity()  {

    private var imageId: Int = 0
    private var article: String? = ""
    private var articleDescription: Int = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        val bundle: Bundle? = intent.extras

        window.windowStyle.apply {

        }

        if (bundle != null) {
            this.imageId = bundle.getInt("imageId")
            this.article = bundle.getString("articleName")
            this.articleDescription = bundle.getInt("articleDescriptionId")

        }


        setContent {
            AdWarsTheme {
                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    val image = painterResource(imageId)

                    Column (
                        modifier = Modifier
                            .fillMaxSize()
                            .padding(innerPadding),
                        horizontalAlignment = Alignment.CenterHorizontally,
                    ) {

                        NavigationBar(
                            modifier = Modifier
                                .fillMaxWidth(),
                            containerColor = colorResource(R.color.primary),
                            contentColor = colorResource(R.color.secondary)
                        ) {
                            Box(Modifier.fillMaxWidth()) {
                                Box(
                                    Modifier
                                        .clickable(enabled = true) {
                                            val myIntent = Intent(this@Article, Shop::class.java)
                                            startActivity(myIntent)
                                        }
                                ) {
                                    Icon(
                                        Icons.AutoMirrored.Rounded.ArrowBack,
                                        contentDescription = "Back",
                                        modifier = Modifier.scale(1.5f)
                                    )
                                }
                                Text(
                                    text = stringResource(R.string.shop),
                                    textAlign = TextAlign.Center,
                                    fontSize = TextUnit(35f, TextUnitType.Sp),
                                    modifier = Modifier
                                        .fillMaxWidth()
                                )
                            }
                        }

                        Image (
                            painter = image,
                            contentDescription = null,
                            contentScale = ContentScale.FillWidth,
                            modifier = Modifier
                                .padding(top = 25.dp)
                                .fillMaxWidth(0.5f)
                                .background(color = Color.LightGray)

                        )

                        Text (
                            text = article ?: "Error",
                            color = colorResource(R.color.secondary),
                            textAlign = TextAlign.Center,
                            fontSize = TextUnit(35f, TextUnitType.Sp),
                            fontWeight = FontWeight.Bold,
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(top = 16.dp)
                        )
                        Text (
                            text = "0000 " + stringResource(R.string.coins),
                            color = colorResource(R.color.secondary),
                            textAlign = TextAlign.Center,
                            fontSize = TextUnit(30f, TextUnitType.Sp),
                            fontWeight = FontWeight.Bold,
                            modifier = Modifier
                                .fillMaxWidth()
                        )

                        Text (
                            text = stringResource(articleDescription),
                            color = colorResource(R.color.secondary),
                            textAlign = TextAlign.Left,
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(top = 25.dp)
                                .padding(horizontal = 16.dp)
                        )

                        Box(
                            modifier = Modifier
                                .padding(20.dp)
                                .clip(shape = RoundedCornerShape(10.dp))
                                .fillMaxSize()
                        ) {
                            Box(
                                modifier = Modifier
                                    .clickable(enabled = true) {
                                        Log.d("Click article", "on clique")
                                    }
                                    .align(Alignment.BottomCenter)
                            ) {
                                Text(
                                    text = stringResource(R.string.buy),
                                    color = colorResource(R.color.secondary),
                                    textAlign = TextAlign.Center,
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .background(color = colorResource(R.color.primary))
                                        .padding(10.dp)
                                )
                            }
                        }

                    }
                }
            }
        }
    }

    override fun onResume() {
        super.onResume()

    }

    override fun onPause() {
        super.onPause()
    }
}