package com.example.adwars.activities

import android.content.pm.ActivityInfo
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.offset
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.colorResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.TextUnit
import androidx.compose.ui.unit.TextUnitType
import androidx.compose.ui.unit.dp
import com.example.adwars.R
import com.example.adwars.component.ADButton
import com.example.adwars.component.text.BigTitle
import com.example.adwars.ui.theme.AdWarsTheme
import com.example.adwars.ui.theme.Modifiers

class JoinGroup : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_USER_PORTRAIT)
        enableEdgeToEdge()

        setContent {

        }
    }
}





@Preview
@Composable
private fun CreateGroupPreview() {
    AdWarsTheme {
        Scaffold(
            modifier = Modifier.fillMaxSize()
        ) { innerPadding ->
            Box(
                Modifier
                    .padding(innerPadding)
                    .fillMaxSize()
                    .padding(Modifiers.paddingLarge),
                contentAlignment = Alignment.Center,
            ) {
                Box(
                    Modifier
                        .align(Alignment.TopCenter)
                        .offset(y = Modifiers.paddingLarge)
                ) {
                    Column(
                        horizontalAlignment = Alignment.CenterHorizontally
                    ) {
                        BigTitle(stringResource(R.string.join_group_title))
                        Text(
                            "Name",
                            textAlign = TextAlign.Center,
                            fontSize = TextUnit(32f, TextUnitType.Sp),
                            fontWeight = FontWeight.Medium,
                        )
                    }
                }

                Column(
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.spacedBy(Modifiers.paddingMedium)
                ) {
                    // TODO : Input Fields
                    Box(Modifiers.INPUT_FIELD)
                }

                Box(
                    Modifier.align(Alignment.BottomCenter)
                ) {
                    ADButton({}) {
                        Text(
                            stringResource(R.string.join_group_button),
                            color = colorResource(R.color.secondary),
                            fontSize = Modifiers.fontSizeMedium,
                            fontWeight = FontWeight.Bold,
                        )
                    }
                }
            }
        }
    }
}