<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-lg-8 col-lg-offset-2">
        <h2>添加记录</h2>
        <hr />
        <form action="" method="post">
          <div class="form-group">
            <label for="item">事项</label>
            <input type="text" class="form-control" id="item" name="item"/>
          </div>
          <div class="form-group">
            <label for="time">发生时间</label>
            <input type="text" class="form-control" id="time" name="time"/>
          </div>
          <div class="form-group">
            <label for="type">类型</label>
            <select class="form-control" id="type" name="type">
              <option value="">支出</option>
              <option value="">收入</option>
            </select>
          </div>
          <div class="form-group">
            <label for="account">金额</label>
            <input type="text" class="form-control" id="account" name="amount"/>
          </div>

          <div class="form-group">
            <label for="remarks">备注</label>
            <textarea class="form-control" id="remarks" name="remark"></textarea>
          </div>
          <hr>
          <button type="submit" class="btn btn-primary btn-block">添加</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
