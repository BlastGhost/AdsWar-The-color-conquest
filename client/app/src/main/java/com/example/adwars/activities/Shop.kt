package com.example.adwars.activities

import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.example.adwars.ui.theme.AdWarsTheme
import javax.xml.parsers.DocumentBuilderFactory

class Shop : ComponentActivity() {
    private val dbf =  DocumentBuilderFactory.newInstance()
    private val builder = dbf.newDocumentBuilder().parse("shop.xml")
    private val doc = builder.toString()


        override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        Log.d("Debug", doc)

        setContent {
            AdWarsTheme {
                /*LazyHorizontalStaggeredGrid(
                    rows = StaggeredGridCells.Fixed(2),
                    horizontalItemSpacing = 16.dp,
                    verticalArrangement = Arrangement.SpaceEvenly
                ) {
                    items(articleList) {article ->
                        ProductCard(
                            productName = 1,
                            image = 1,
                            contentDescription = 1
                        )
                    }
                }*/
            }
        }

    }

    override fun onPause() {
        super.onPause()
    }

    override fun onResume() {
        super.onResume()
    }

    override fun onStop() {
        super.onStop()
    }
}

@Preview(showBackground = true)
@Composable
fun ShopPreview() {

}