<template>
  <div class="form-group required row">
    <label class="col-md-2 control-label text-lg-right" :class="{'text-danger' : error}" :for="'input-'+field">{{placeHolder}}:</label>
    <div class="col-sm-12 col-md-10">
      <input :value="modelValue" @input="onInput" :type="type" :name="field" :placeholder="placeHolder" :id="'input-'+field" class="form-control" />
      <div class="text-danger" v-show="error">{{errMsg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: {
    type: String,
    field: String,
    placeHolder: String,
    modelValue: String,
    error: Boolean,
    errMsg: String
  },
  emits: ["update:modelValue"],

  methods:{
    onInput(e){
      this.$emit("update:modelValue", e.target.value)
    }
  }
}
</script>

<style scoped>

</style>