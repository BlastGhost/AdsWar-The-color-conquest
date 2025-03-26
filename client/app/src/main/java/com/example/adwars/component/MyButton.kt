package com.example.adwars.component

import android.content.Intent
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.adwars.R

@Composable
fun MyButton(
    modifier: Modifier = Modifier,
    onClick: () -> Unit = {},
    content: @Composable () -> Unit,
) {
    Button(
        onClick = onClick,
        modifier = modifier
    ) {
        content
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewMyButton() {
    Scaffold { innerPadding ->

        MyButton(
            modifier = Modifier.padding(innerPadding),
            onClick = {
            }
        ) {
            Text(text = stringResource(R.string.go))
        }
    }

}