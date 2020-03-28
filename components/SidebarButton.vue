<template>
  <div class="sidebar-button" @click="showSidebar">
    <a-icon type="bars" />
    <a-popover
      placement="bottomRight"
      trigger="click"
      v-model="popover_visible"
      overlayClassName="reset-popover"
    >
      <div slot="content">
        <NavLinks />
      </div>
    </a-popover>
  </div>
</template>

<script>
import NavLinks from '@theme/components/NavLinks.vue';

export default {
  components: { NavLinks },
  data() {
    return {
      popover_visible: false
    };
  },
  methods: {
    showSidebar() {
      this.$store.state.navStyle = 'inline';
      this.popover_visible = true;
    }
  }
};
</script>

<style lang="less">
@import '../styles/palette.less';

.sidebar-button {
  cursor: pointer;
  display: none;
  position: absolute;
  padding: 0 0.6rem;
  right: .8rem;
  // line-height: @navbarHeight;
  top: .1875rem;
  z-index: 3;
  font-size: 1.375rem;
  color: #828282;

  .reset-sidebar {
    transform: translateX(0) !important;
  }
}

.reset-popover {
  width: 16rem;

  .ant-popover-inner-content {
    padding: 0;
  }
}

@media (max-width: @MQMobile) {
  .sidebar-button {
    display: block;
  }
}
</style>
