package com.example.adwars.component

import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.example.adwars.R
import com.example.adwars.ui.theme.Modifiers

@Composable
fun TextBar() {
    val init = stringResource(R.string.group)
    var textState by rememberSaveable { mutableStateOf("") }

    TextField(
        value = textState,
        singleLine = true,
        onValueChange = {
            textState = it
        },
        placeholder = {Text(text = init)},
        modifier = Modifiers.INPUT_FIELD

    )
}


@Preview(showBackground = true)
@Composable
fun PreviewBar() {
    TextBar()
}