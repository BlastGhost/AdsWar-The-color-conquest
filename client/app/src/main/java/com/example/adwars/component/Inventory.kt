package com.example.adwars.component

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.TextUnitType
import androidx.compose.ui.unit.dp
import com.example.adwars.R

@Composable
fun Inventory(
    modifier: Modifier = Modifier
) {
    val list: MutableList<@Composable () -> Unit> = mutableListOf()
    for (i in 1..10) {
        list.add {
            ProductCard(
                productName = R.string.item_test,
                image = R.drawable.ic_launcher_background,
                contentDescription = R.string.item_description
            )
        }
    }
    Column(
        modifier = modifier
            .padding(horizontal = 20.dp, vertical = 20.dp)
            .clip(shape = RoundedCornerShape(5))
            .background(color = Color.LightGray)
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
        ) {
            Text(
                text = stringResource(R.string.inventory),
                fontSize = TextUnit(20f, TextUnitType.Sp),
                color = Color.Red,
                modifier = Modifier
                    .align(alignment = Alignment.TopStart)
            )
            Text(
                text = "0000 pièces",
                fontSize = TextUnit(20f, TextUnitType.Sp),
                color = Color.Blue,
                modifier = Modifier
                    .align(alignment = Alignment.TopEnd)
                    //.padding(top = 5.dp, end = 5.dp)
            )
            Caroussel(
                listContent = list,
                modifier = modifier
                    .padding(top = 20.dp)
            )
        }
    }
}


@Preview(showBackground = true)
@Composable
fun InventoryPreview() {
    Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->

        Box(
            contentAlignment = Alignment.BottomCenter,
            modifier = Modifier
                .fillMaxSize()
                .background(color = Color.White)
        ) {
            Inventory()
        }
    }
}