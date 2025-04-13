package com.example.adwars.activities

import android.content.Context
import android.content.Intent
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
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import com.android.volley.Request
import com.example.adwars.R
import com.example.adwars.component.cards.GroupCard
import com.example.adwars.component.utils.TextInputBar
import com.example.adwars.component.utils.NavBar
import com.example.adwars.component.utils.SearchBar
import com.example.adwars.system.models.AWGroup
import com.example.adwars.system.network.HttpRequest
import com.example.adwars.system.network.Network
import com.example.adwars.system.savers.GroupSaver
import com.example.adwars.ui.theme.AdWarsTheme
import com.example.adwars.ui.theme.Modifiers
import java.util.ArrayList

class Groups : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_USER_PORTRAIT)
        enableEdgeToEdge()

        Network(this)



        setContent {
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
                            stringResource(R.string.groups_title),
                        )

                        Box(
                            Modifier
                                .padding(horizontal = Modifiers.paddingLarge)
                        ) {
                            SearchBar(stringResource(R.string.groups_search_group), ArrayList())
                        }

                        Column(
                            Modifier
                                .padding(horizontal = Modifiers.paddingLarge)
                                .verticalScroll(rememberScrollState()),
                            verticalArrangement = Arrangement.spacedBy(Modifiers.paddingMedium),
                            horizontalAlignment = Alignment.CenterHorizontally,
                        ) {
                            GroupsList(this@Groups)
                        }

                    }
                }
            }
        }
    }
}




@Composable
private fun GroupsList(
    context: Context
) {
    var i = 0
    val groups = mutableListOf(
        AWGroup("group_${i++}", "Group $i"),
        AWGroup("group_${i++}", "Group $i"),
        AWGroup("group_${i++}", "Group $i"),
        AWGroup("group_${i++}", "Group $i"),
        AWGroup("group_${i++}", "Group $i"),
        AWGroup("group_${i++}", "Group $i"),
        AWGroup("group_${i++}", "Group $i"),
    )

    /*
    val http = HttpRequest(
        Request.Method.POST,
        "groups",
        context,
        {
            it as List<AWGroup>
            val grps = it.map { g -> AWGroup(g.id, g.name) }
            groups.addAll(grps)
        }
    )

    http.call()
    */

    for (group in groups) {
        GroupCardBox(context, group.id, group.name)
    }
}



@Composable
private fun GroupCardBox(
    context: Context,
    id: String,
    name: String
) {
    Box(
        Modifier
            .clickable {
                val intent = Intent(context, JoinGroup::class.java)
                val bundle = Bundle()

                bundle.putString("id", id)
                bundle.putString("name", name)

                intent.putExtras(bundle)
                context.startActivity(intent)
            }
    ) {
        GroupCard(name)
    }
}





@Preview
@Composable
private fun GroupsPreview() {

}
