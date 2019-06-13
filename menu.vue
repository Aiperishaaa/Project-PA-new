<template>
    <div class="menu2"> 
        <nav :class="defaultClass" class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/">PA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="about">О проекте<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="Participants">Участницы</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="Mentoring">Менторство</a>
            </li>
            <li class="nav-item active dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Мероприятия
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="ActivityPA">Мероприятия РА</a>
                <a class="dropdown-item" href="ActivityIT">Мероприятия IT</a>
                </div>
            </li>
            </ul>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
            </form>
    </nav>
  

</template>

<script>
export default {
    computed: {
        defaultClass () {
            return {
                'navbar--overlay': this.$route.path === '/'
            }
        }
    }
}
</script>

<style>

.navbar--overlay {
    position: absolute;
    z-index: 999;
    top: 0;
    width: 100%;
    background: none!important;
}
.form-inline {
    padding-left: 450px;
}

</style>
