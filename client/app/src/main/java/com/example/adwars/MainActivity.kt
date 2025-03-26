package com.example.adwars

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.adwars.component.Carousel
import com.example.adwars.component.MapApi
import com.example.adwars.component.ProductCard
import com.example.adwars.ui.theme.AdWarsTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            AdWarsTheme {
                val list: MutableList<@Composable () -> Unit> = mutableListOf()
                for (i in 1..10) {
                    list.add {
                        ProductCard(
                            productName = stringResource(R.string.item_test),
                            image = R.drawable.ic_launcher_foreground,
                            contentDescription = R.string.item_description
                        )
                    }
                }

                Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->


                }

            }
        }
    }
}

@Preview(showBackground = true)
@Composable
fun MainPreview() {
    AdWarsTheme {
        Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
            val list: MutableList<@Composable () -> Unit> = mutableListOf()
            for (i in 1..10) {
                list.add {
                    ProductCard(
                        productName = stringResource(R.string.item_test),
                        image = R.drawable.ic_launcher_background,
                        contentDescription = R.string.item_description
                    )
                }
            }
            Box(modifier = Modifier.fillMaxSize()) {
                MapApi()
                Carousel(
                    horizontalArrangement = Arrangement.spacedBy(20.dp),
                    listContent = list,
                    modifier = Modifier
                        .padding(innerPadding)
                        .align(Alignment.BottomCenter),

                )
            }
        }
    }
}