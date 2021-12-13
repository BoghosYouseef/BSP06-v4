<template>
    <div>
        <modal id="popupWindow">
            <p  style="position: relative;">
                 {{message}}
            </p>
        </modal>
    </div>
</template>

<script>
export default {
    name: "popupWindow",
    props: ['message']
}
</script>

<style scoped>

#popupWindow{
    background-color: rgb(100, 100 , 100);
    color: blanchedalmond;
    width: 40%;
    height: 10%;
    position: absolute;
    right: 25%;
    top: 70%;
    padding: 50px 50px 50px 50px;
    text-align: center;
}
</style>