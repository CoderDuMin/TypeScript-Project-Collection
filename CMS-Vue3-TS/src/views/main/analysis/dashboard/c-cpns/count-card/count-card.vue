<template>
  <div class="count-card">
    <div class="header">
      <span>{{ title }}</span>
      <el-tooltip :content="tips" placement="bottom" effect="light">
        <el-icon>
          <Warning />
        </el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <span class="count" ref="number1Ref">{{ number1 }}</span>
    </div>
    <div class="footer">
      <span>{{ subtitle }}</span>
      <span ref="number2Ref">{{ number2 }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CountUp } from 'countup.js'
import { onMounted, ref } from 'vue';
interface IProps {
  title: string,
  subtitle: string,
  tips: string,
  amount: string,
  number1: number,
  number2: number
}
const props = withDefaults(defineProps<IProps>(), {
  title: '',
  subtitle: '',
  tips: '',
  number1: 0,
  number2: 0,
  amount: ''
})

const number1Ref = ref<HTMLElement>()
const number2Ref = ref<HTMLElement>()

const option = {
  prefix: props.amount === 'saleroom' ? '¥' : ''
}
onMounted(() => {
  const num1Anim = new CountUp(number1Ref.value!, props.number1, option)
  const num2Anim = new CountUp(number2Ref.value!, props.number2, option)
  num1Anim.start()
  num2Anim.start()
})

</script>

<style scoped lang="scss">
.count-card {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: 130px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .header {
    display: flex;
    height: 38px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    justify-content: space-between;
    align-items: flex-end;
  }

  .content {
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 0px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
  }

  .footer {
    display: flex;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
    border-top: 1px solid #f0f0f0;
  }
}
</style>
