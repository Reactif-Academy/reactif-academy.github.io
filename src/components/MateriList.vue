<template>
    <div>
        <h1>List Materi</h1>
        <ul>
            <li v-for="m in materi" :key="m.nama">
                {{ m.nama }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            materi: [
                {"nama": "Web Programming"},
                {"nama": "Android Development"},
                {"nama": "Game Development"}
            ]
        }
    }
}
</script>