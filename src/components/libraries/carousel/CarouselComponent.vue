<template>
  <div class="carousel-wrapper">
    <ul class="carousel-body">
      <li>
        <RouterLink to="/">
          <img
            src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg"
            alt=""
          />
        </RouterLink>
      </li>
    </ul>

    <a href="javascript:void(0)" class="prev">
      <i class="iconfont icon-lunbo"></i
    ></a>
    <a href="javascript:void(0)" class="next">
      <i class="iconfont icon-next"></i
    ></a>
    <div class="indicator">
      <span v-for="i in 5" :key="i"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel-wrapper {
  position: relative;
  z-index: $caroursel-zindex;
  .carousel-body {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .prev,
  .next {
    display: inline-block;
    position: absolute;
    transform: translateY(-50%);
    width: 4.4rem;
    height: 4.4rem;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 50%;
    text-align: center;
    line-height: 4.4rem;
    color: #fff;
    background-color: rgba($color: #000000, $alpha: 0.3);
  }
  .prev {
    top: 50%;
    left: 2rem;
  }

  .next {
    top: 50%;
    right: 2rem;
  }

  .indicator {
    position: absolute;
    left: 50%;
    bottom: 2rem;
    span {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      background: $indicator-color;
      border-radius: 50%;
      margin: 0 1rem;
    }
  }
}
</style>
