<template>
    <div class="navbar-container">
        <nav>
            <a href="https://surveasy.oopy.io/" target="_blank">About 서베이지</a>
            <a href="https://surveasy.oopy.io/faq" target="_blank">문의하기</a>
        </nav>
    </div>
</template>


<script>
export default {
    name: 'HomeNavBar'
}
</script>


<style>
nav {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 20px;
}

nav a {
    font-weight: bold;
    color: #a4a4a4;
    text-decoration: none;
    margin: 10px;
}

nav a:hover {
    color: #000000;
}

nav a.router-link-exact-active {
    color: #000000;
    text-decoration: underline #0AAC00 2px;
}

.navbar-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: left;
}</style>