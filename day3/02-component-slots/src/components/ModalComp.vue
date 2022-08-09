<template>
     <div class="container">
    <div class="header">
      <slot name="title"/>
    </div>
    <hr />
    <div class="content my-2">
        <slot name="content"/>
    </div>
    <hr />
    <div class="footer text-right">
      <slot name="footer"/>
    </div>
    <slot />
  </div>
</template>