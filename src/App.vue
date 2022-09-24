<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>|
        <router-link to="/delete">Delete</router-link>|
        <router-link to="/post">PostRequest</router-link>|
        <router-link to="/login">LoginSubmit</router-link>|
        <router-link to="/form">FormSurbmit</router-link>|
        <p>
            Router Params
            <router-link to="/user/402">User:402</router-link>|
        </p>
        <div>
            <hr>
            <h1>Parent and child</h1>
            <router-link to="/parent">PaRoo</router-link>|
        </div>
    </div>
    <router-view />
  </template>