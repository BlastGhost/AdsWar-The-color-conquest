package com.example.adwars.component

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.adwars.R
import com.example.adwars.ui.theme.Modifiers

@Composable
fun Inventory(
    modifier: Modifier = Modifier,
    backgroundColor: Color = colorResource(R.color.primary),
) {
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


    Column(
        Modifier
            .clip(Modifiers.borderRadiusMedium)
            .background(backgroundColor),
    ) {
        Row(
            Modifier
                .fillMaxWidth()
                .padding(Modifiers.paddingMedium),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text(
                stringResource(R.string.inventory),
                fontSize = Modifiers.fontSizeMedium,
                color = colorResource(R.color.secondary),
            )
            Text(
                "0000 $",
                Modifier
                    .border(
                        width = 1.dp,
                        color = colorResource(R.color.white),
                        shape = RoundedCornerShape(100.dp)
                    )
                    .padding(Modifiers.paddingLarge, Modifiers.paddingSmall),
                fontSize = Modifiers.fontSizeMedium,
                color = colorResource(R.color.secondary),
            )
        }

        Carousel(
            list,
            Modifier.padding(start = Modifiers.paddingMedium, end = Modifiers.paddingMedium, bottom = Modifiers.paddingMedium)
        )
    }
}


@Preview()
@Composable
fun InventoryPreview() {
    Inventory()
}