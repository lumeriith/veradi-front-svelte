<script>
    import {Button } from 'sveltestrap/src';
    const login = async() => {
        const res = await fetch("api/login", {
            method:"POST",
            body: JSON.stringify({
                username: "test@test.com",
                password: "12345678"
            })
        })
    }
</script>
<h1>Login</h1>
<Button on:click={login}> login Button</Button>