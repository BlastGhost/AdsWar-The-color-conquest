package com.example.adwars.activities

import android.content.pm.ActivityInfo
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.adwars.component.cards.GroupCard
import com.example.adwars.component.utils.NavBar
import com.example.adwars.ui.theme.AdWarsTheme
import com.example.adwars.ui.theme.Modifiers

class Groups : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_USER_PORTRAIT)
        enableEdgeToEdge()

        setContent {

        }
    }
}



@Composable
private fun GroupCardBox() {
    Box(
        Modifier.clickable {
            // TODO : Change to Group Activity
        }
    ) {
        GroupCard()
    }
}





@Preview
@Composable
private fun GroupsPreview() {
    AdWarsTheme {
        Scaffold(
            modifier = Modifier.fillMaxSize()
        ) { innerPadding ->
            Column(
                Modifier
                    .fillMaxHeight()
                    .padding(innerPadding),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(Modifiers.gapLarge)
            ) {
                NavBar(
                    "Groups",
                )

                // TODO : Search Bar
                Box(
                    Modifier.padding(horizontal = Modifiers.paddingLarge)
                ) {
                    Box(Modifiers.SEARCH_BAR)
                }

                Column(
                    Modifier
                        .padding(horizontal = Modifiers.paddingLarge)
                        .verticalScroll(rememberScrollState()),
                    verticalArrangement = Arrangement.spacedBy(Modifiers.paddingMedium),
                    horizontalAlignment = Alignment.CenterHorizontally,
                ) {
                    GroupCardBox()
                    GroupCardBox()
                    GroupCardBox()
                }

            }
        }
    }
}
