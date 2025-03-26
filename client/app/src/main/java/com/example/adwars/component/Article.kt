package com.example.adwars.component

import androidx.annotation.DrawableRes
import androidx.annotation.StringRes
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.adwars.ui.theme.AdWarsTheme
import com.example.adwars.R

@Composable
fun Article(
    @DrawableRes imageId: Int,
    @StringRes articleId: Int,
    @StringRes articleDescriptionId: Int,
    modifier: Modifier = Modifier
) {

    val image = painterResource(imageId)

    Column(
        modifier = Modifier
            .fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,

    ) {
        Text(
            text = stringResource(R.string.shop),
            color = colorResource(R.color.secondary),
            textAlign = TextAlign.Center,
            modifier = modifier
                .fillMaxWidth()
                .background(color = colorResource(R.color.primary), shape = RoundedCornerShape(8.dp))
                .padding(16.dp)
        )
        Image(
            painter = image,
            contentDescription = null,
            contentScale = ContentScale.FillWidth,
            modifier = modifier
                .padding(top = 25.dp)
                .fillMaxWidth(0.5f)
                .background(color = Color.LightGray)

        )

        Text(
            text = stringResource(articleId),
            color = colorResource(R.color.secondary),
            textAlign = TextAlign.Center,
            fontWeight = FontWeight.Bold,
            modifier = modifier
                .fillMaxWidth()
                .padding(top = 16.dp)
        )
        Text(
            text = "0000 " + stringResource(R.string.coins),
            color = colorResource(R.color.secondary),
            textAlign = TextAlign.Center,
            fontWeight = FontWeight.Bold,
            modifier = modifier
                .fillMaxWidth()
        )

        Text(
            text = stringResource(articleDescriptionId),
            color = colorResource(R.color.secondary),
            textAlign = TextAlign.Left,
            modifier = modifier
                .fillMaxWidth()
                .padding(top = 16.dp)
                .padding(horizontal = 16.dp)
        )

    }
}


@Preview(showBackground = true)
@Composable
fun ArticlePreview() {
    AdWarsTheme {
        Article(
            imageId = R.drawable.ic_launcher_foreground,
            articleId = R.string.item_test,
            articleDescriptionId = R.string.item_description
        )
    }
}
