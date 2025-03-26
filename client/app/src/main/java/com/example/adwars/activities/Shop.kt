package com.example.adwars.activities

import android.content.Intent
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.TextUnitType
import androidx.compose.ui.unit.dp
import com.example.adwars.R
import com.example.adwars.component.ProductCard
import com.example.adwars.ui.theme.AdWarsTheme
import kotlin.jvm.java


class Shop : ComponentActivity() {
    private var articleList : MutableList<@Composable () -> Unit> = mutableListOf()
    private val N = 80

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()



        setContent {
            AdWarsTheme {
                for (ii in 1..N) {
                    val productName = "Article $ii"

                    articleList.add {
                        Box(
                            contentAlignment = Alignment.Center,
                            modifier = Modifier
                                .clickable(true) {
                                    val myIntent = Intent(this@Shop, Article::class.java)

                                    val b = Bundle()
                                    b.putInt("imageId", R.drawable.ic_launcher_background)
                                    b.putString("articleName", productName)
                                    b.putInt("articleDescriptionId", R.string.item_description)
                                    myIntent.putExtras(b)
                                    startActivity(myIntent)
                                    finish()
                                }
                        ) {
                            ProductCard(
                                productName = productName,
                                image = R.drawable.ic_launcher_background,
                                contentDescription = R.string.item_description,
                                modifier = Modifier.padding(top = 10.dp)
                            )
                        }
                    }
                }

                Scaffold { innerPadding ->
                    Column(
                        modifier = Modifier
                            .padding(innerPadding)
                            .fillMaxSize(),
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        Text(
                            text = stringResource(R.string.shop),
                            color = colorResource(R.color.secondary),
                            textAlign = TextAlign.Center,
                            fontSize = TextUnit(35f, TextUnitType.Sp),
                            modifier = Modifier
                                .fillMaxWidth()
                                .background(
                                    color = colorResource(R.color.primary),
                                    shape = RoundedCornerShape(10.dp)
                                )
                                .padding(10.dp)
                        )
                        LazyVerticalGrid(
                            columns = GridCells.Adaptive(minSize = 110.dp),
                            modifier = Modifier.fillMaxSize(),
                        ) {
                            items(articleList) { article ->
                                article()
                            }
                        }
                    }

                }

            }
        }

    }
}