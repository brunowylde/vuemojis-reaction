# Vuemojis Reaction

`Vuemojis Reaction` is a Vue component that adds an interactive emoji reactions interface to your application.

## Installation

To install the `vuemojis-reaction` package, run the following command:

```bash
npm install vuemojis-reaction
```

## Usage
```
<template>
    <Vuemojis :reactions="reactions" @selected-reaction="handleReaction" />
</template>

<script setup>
import { Vuemojis } from 'vuemojis-reaction';

const reactions = [
  { label: 'Like', icon: '👍', color: 'yellow' },
  { label: 'Love', icon: '❤️', color: 'red' },
  { label: 'Surprised', icon: '😮', color: 'yellow' },
  { label: 'Brilliant', icon: '💡', color: 'blue' }
];

function handleReaction(reaction) {
  console.log('Selected reaction:', reaction);
}
</script>
```

## Props
The Vuemojis component accepts the following props:

```
reactions (Array): An array of reaction objects.
label (String): Default text of the button
```