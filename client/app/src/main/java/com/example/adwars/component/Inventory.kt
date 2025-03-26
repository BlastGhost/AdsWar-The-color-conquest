package com.example.adwars.component

import androidx.compose.foundation.background
import androidx.compose.foundation.border
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
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.TextUnitType
import androidx.compose.ui.unit.dp
import com.example.adwars.R

@Composable
fun Inventory(
    modifier: Modifier = Modifier,
    backgroundColor: Color = colorResource(R.color.primary),
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
            .background(color = backgroundColor)
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
        ) {
            Text(
                text = stringResource(R.string.inventory),
                fontSize = TextUnit(20f, TextUnitType.Sp),
                color = colorResource(R.color.secondary),
                modifier = Modifier
                    .align(alignment = Alignment.TopStart)
                    .padding(top = 10.dp, start = 25.dp)
            )
            Text(
                text = "0000 pièces",
                fontSize = TextUnit(20f, TextUnitType.Sp),
                color = colorResource(R.color.secondary),
                modifier = Modifier
                    .align(alignment = Alignment.TopEnd)
                    .padding(top = 10.dp, end = 15.dp)
                    .border(width = 2.dp, color = colorResource(R.color.white), shape = RoundedCornerShape(10.dp))
                    .padding(3.dp)
            )
            Caroussel(
                listContent = list,
                modifier = modifier
                    .padding(top = 25.dp)
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