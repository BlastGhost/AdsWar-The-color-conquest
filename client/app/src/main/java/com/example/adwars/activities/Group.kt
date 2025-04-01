package com.example.adwars.activities

import android.content.pm.ActivityInfo
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import com.example.adwars.component.cards.PlayerCard
import com.example.adwars.component.utils.TextInputBar
import com.example.adwars.component.utils.NavBar
import com.example.adwars.component.utils.SearchBar
import com.example.adwars.ui.theme.AdWarsTheme
import com.example.adwars.ui.theme.Modifiers
import java.util.ArrayList

class Group : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_USER_PORTRAIT)
        enableEdgeToEdge()

        setContent {

        }
    }
}


@Composable
private fun PlayerCardBox(modifier: Modifier = Modifier) {
    PlayerCard()
}






@Preview
@Composable
private fun GroupPreview() {
    AdWarsTheme {
        Scaffold(
            modifier = Modifier
                .fillMaxSize()
        ) { innerPadding ->
            Column(
                Modifier
                    .fillMaxHeight()
                    .padding(innerPadding),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(Modifiers.gapLarge)
            ) {
                NavBar(
                    "Group Name",
                )

                Box(
                    Modifier
                        .padding(horizontal = Modifiers.paddingLarge)
                ) {
                    SearchBar("R.string.search_group", ArrayList())
                }

                Text(
                    "xxxx",
                    textAlign = TextAlign.Center,
                    fontSize = Modifiers.fontSizeMedium,
                    fontWeight = FontWeight.Bold,
                )

                Column(
                    Modifier
                        .padding(horizontal = Modifiers.paddingLarge)
                        .verticalScroll(rememberScrollState()),
                    verticalArrangement = Arrangement.spacedBy(Modifiers.paddingMedium),
                    horizontalAlignment = Alignment.CenterHorizontally,
                ) {
                    PlayerCardBox()
                    PlayerCardBox()
                    PlayerCardBox()
                    PlayerCardBox()
                    PlayerCardBox()
                    PlayerCardBox()
                }

            }
        }
    }
}
