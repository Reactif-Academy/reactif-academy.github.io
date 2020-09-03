<template>
    <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
            <div class="tabs is-right">
                <ul>
                    <li class="is-active">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/tentang-kami">Tentang Kami</router-link>
                    </li>
                    <li>
                        <router-link to="/kontak">Kontak</router-link>
                    </li>
                </ul>
                <span class="navbar-item">
                    <a class="button is-white is-outlined" href="https://github.com/Reactif-Academy/">
                        <span title="Hello from the other side">Github</span>
                    </a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>