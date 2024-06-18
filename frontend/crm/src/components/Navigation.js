import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/EvilIcons";
import PeopleList from "./PeopleList";
import CompanyList from "./CompanyList";
import AddPerson from "./AddPerson";

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="people"
      activeColor="#FF7043"
      barStyle={{ backgroundColor: "#4DB6AC" }}
    >
      <Tab.Screen
        name="people"
        component={PeopleList}
        options={{
          tabBarLabel: "People",
          tabBarIcon: ({ color }) => (
            <Icon name={"user"} size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Add"
        component={AddPerson}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color }) => (
            <Icon name={"plus"} size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Company"
        component={CompanyList}
        options={{
          tabBarLabel: "Company",
          tabBarIcon: ({ color }) => (
            <Icon name={"archive"} size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
