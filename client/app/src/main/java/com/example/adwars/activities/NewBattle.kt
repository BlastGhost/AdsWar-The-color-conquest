package com.example.adwars.activities

import android.content.pm.ActivityInfo
import android.graphics.drawable.Icon
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.rounded.ArrowBack
import androidx.compose.material3.Icon
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import com.example.adwars.R
import com.example.adwars.component.AdButton
import com.example.adwars.component.text.BigTitle
import com.example.adwars.ui.theme.AdWarsTheme
import com.example.adwars.ui.theme.Modifiers

class NewBattle : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_USER_PORTRAIT)
        enableEdgeToEdge()

        setContent {
            AdWarsTheme {
                Scaffold(
                    modifier = Modifier.fillMaxSize()
                ) { innerPadding ->
                    Box(
                        Modifier.fillMaxSize(),
                        contentAlignment = Alignment.Center,
                    ) {
                        Column(
                            Modifier
                                .padding(innerPadding)
                                .padding(Modifiers.paddingLarge),
                            horizontalAlignment = Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.spacedBy(Modifiers.paddingLarge * 6),
                        ) {
                            Column(
                                horizontalAlignment = Alignment.CenterHorizontally,
                                verticalArrangement = Arrangement.spacedBy(Modifiers.paddingLarge * 2),
                            ) {
                                BigTitle(stringResource(R.string.new_battle_title))

                                Column(
                                    horizontalAlignment = Alignment.CenterHorizontally,
                                    verticalArrangement = Arrangement.spacedBy((-Modifiers.paddingSmall))
                                ) {
                                    Text(stringResource(R.string.new_battle_start) + " :")
                                    TimeRemaining()
                                }
                            }

                            Column(
                                verticalArrangement = Arrangement.spacedBy(Modifiers.paddingLarge)
                            ) {
                                ChoiceButton(stringResource(R.string.new_battle_painter)) { }
                                ChoiceButton(stringResource(R.string.new_battle_viewer)) { }
                            }
                        }
                    }
                }
            }
        }
    }
}



@Composable
private fun TimeRemaining() {
    Text(
        "XXj 00h 00m",
        fontWeight = FontWeight.ExtraBold,
    )
}



@Composable
private fun ChoiceButton(label: String, icon: Icon? = null, onClick: () -> Unit) {
    AdButton(onClick) {
        Text(
            label,
            color = colorResource(R.color.secondary),
            fontSize = Modifiers.fontSizeMedium,
            fontWeight = FontWeight.Bold,
        )
    }
}




@Preview
@Composable
private fun NewBattlePreview() {
    Box() {
        Icon(Icons.AutoMirrored.Rounded.ArrowBack, "")
    }
}