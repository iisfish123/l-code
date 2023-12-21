<template>
  <div>
    <Top />
    <ContentDrag />
  </div>
</template>

<script>
// @ is an alias to /src
import Top from './header'
import ContentDrag from './content'

export default {
  name: 'HomeView',
  components: { Top, ContentDrag }
}
</script>

