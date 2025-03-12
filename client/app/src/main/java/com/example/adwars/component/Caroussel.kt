package com.example.adwars.component

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.example.adwars.R
import com.example.adwars.ui.theme.AdWarsTheme


@Composable
fun Caroussel(
    modifier: Modifier = Modifier,
    contentPadding: Dp = 16.dp,
    horizontalArrangement: Arrangement.Horizontal = Arrangement.spacedBy(20.dp),
    listContent: MutableList<@Composable () -> Unit> = ArrayList()
) {
    LazyRow(
        contentPadding = PaddingValues(contentPadding),
        horizontalArrangement = horizontalArrangement,
        modifier = modifier
    ){
        items(listContent) { elem ->
            elem()
        }
    }
}



@Preview(showBackground = true)
@Composable
fun CarousselPreview() {
    AdWarsTheme {
        Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
            val list: MutableList<@Composable () -> Unit> = mutableListOf()
            for (i in 1..10) {
                list.add {
                    SaveVariable()
                }
            }
            Caroussel(
                horizontalArrangement = Arrangement.spacedBy(20.dp),
                modifier = Modifier
                    .padding(innerPadding),
                listContent = list
            )
        }
    }
}