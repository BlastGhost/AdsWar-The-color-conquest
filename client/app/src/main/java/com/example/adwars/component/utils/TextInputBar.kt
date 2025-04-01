package com.example.adwars.component.utils

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.adwars.ui.theme.Modifiers

@Composable
fun TextInputBar(
    placeholder: String,
    onValueChanged: (String) -> Unit,
) {
    var textState by rememberSaveable { mutableStateOf("") }

    TextField(
        textState,
        onValueChanged,
        Modifiers.INPUT_FIELD,
        singleLine = true,
        placeholder = {
            Text(
                placeholder,
                Modifier
                    .fillMaxWidth(),
            )
        },
    )
}


@Preview(showBackground = true)
@Composable
fun PreviewBar() {
    TextInputBar("Test Name", {})
}