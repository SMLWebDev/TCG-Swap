<script setup lang="ts">
  import { ref } from 'vue'
  import { useAuth } from '@/composable/AuthUser.ts'

  const { uploadAvatar } = useAuth()
  const avatarPreview = ref('')
  const avatarFile = ref<File | null>(null)
  const message = ref('')

  const emit = defineEmits(['avatarUploaded'])

  const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
      avatarFile.value = target.files[0]
      avatarPreview.value = URL.createObjectURL(target.files[0])
    }
  }

  const uploadImage = async () => {
    if (!avatarFile.value) {
      message.value = 'Please select an image.'
      return
    }

    const uploadResult = await uploadAvatar(avatarFile.value)

    if (uploadResult?.error) {
      message.value = uploadResult.error
    } else if (uploadResult?.url) {
      message.value = 'Avatar uploaded successfully!'
      emit('avatarUploaded', uploadResult.url)
    }
  }
</script>

<template>
  <div>
    <label for="upload">Upload Avatar:</label>
    <input type="file" accept="image/*" @change="handleFileChange" />
    <img v-if="avatarPreview" :src="avatarPreview" alt="Avatar Preview" width="100" />
    <button @click="uploadImage">Upload</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>