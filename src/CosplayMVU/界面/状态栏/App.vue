<template>
  <div class="mvu-root">
    <div class="mvu-header">Cosplay MVU</div>

    <div class="mvu-body">
      <!-- 樱桃 -->
      <div v-if="store.data.角色.樱桃.在场" class="char-card">
        <div class="char-title">
          <span class="char-icon">&#x1f352;</span>
          <span class="char-name">樱桃</span>
          <span class="char-age">23岁</span>
          <span class="badge badge-on">在场</span>
        </div>

        <div class="char-bars">
          <div class="bar-row">
            <span class="bar-label">好感度</span>
            <div class="bar-track">
              <div class="bar-fill affection" :style="{ width: (store.data.角色.樱桃.好感度 / 200 * 100) + '%' }"></div>
            </div>
            <span class="bar-val">{{ store.data.角色.樱桃.好感度 }}/200</span>
            <span class="phase-tag">{{ affectionPhase(store.data.角色.樱桃.好感度).text }}</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">高潮值</span>
            <div class="bar-track">
              <div class="bar-fill arousal" :style="{ width: (store.data.角色.樱桃.高潮值 / 100 * 100) + '%' }"></div>
            </div>
            <span class="bar-val">{{ store.data.角色.樱桃.高潮值 }}/100</span>
          </div>
        </div>

        <div class="char-detail">
          <div class="detail-row"><b>角色扮演</b> {{ store.data.角色.樱桃.角色扮演 || '无' }}</div>
          <div class="detail-row"><b>服装</b> {{ store.data.角色.樱桃.服装详情 }}</div>
          <div class="detail-row"><b>情绪</b> {{ store.data.角色.樱桃.情绪 }}</div>
          <div class="detail-row"><b>口腔</b> {{ store.data.角色.樱桃.口腔 }}</div>
          <div class="detail-row"><b>小穴</b> {{ store.data.角色.樱桃.小穴 }}</div>
          <div class="detail-row"><b>胸部</b> {{ store.data.角色.樱桃.胸部 }}</div>
          <div class="detail-row"><b>行为</b> {{ store.data.角色.樱桃.行为 }}</div>
        </div>
      </div>

      <!-- 坂坂白 -->
      <div v-if="store.data.角色.坂坂白.在场" class="char-card">
        <div class="char-title">
          <span class="char-icon">&#x26a1;</span>
          <span class="char-name">坂坂白</span>
          <span class="char-age">23岁</span>
          <span class="badge badge-on">在场</span>
        </div>

        <div class="char-bars">
          <div class="bar-row">
            <span class="bar-label">好感度</span>
            <div class="bar-track">
              <div class="bar-fill affection" :style="{ width: (store.data.角色.坂坂白.好感度 / 200 * 100) + '%' }"></div>
            </div>
            <span class="bar-val">{{ store.data.角色.坂坂白.好感度 }}/200</span>
            <span class="phase-tag">{{ affectionPhase(store.data.角色.坂坂白.好感度).text }}</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">高潮值</span>
            <div class="bar-track">
              <div class="bar-fill arousal" :style="{ width: (store.data.角色.坂坂白.高潮值 / 100 * 100) + '%' }"></div>
            </div>
            <span class="bar-val">{{ store.data.角色.坂坂白.高潮值 }}/100</span>
          </div>
        </div>

        <div class="char-detail">
          <div class="detail-row"><b>角色扮演</b> {{ store.data.角色.坂坂白.角色扮演 || '无' }}</div>
          <div class="detail-row"><b>服装</b> {{ store.data.角色.坂坂白.服装详情 }}</div>
          <div class="detail-row"><b>情绪</b> {{ store.data.角色.坂坂白.情绪 }}</div>
          <div class="detail-row"><b>口腔</b> {{ store.data.角色.坂坂白.口腔 }}</div>
          <div class="detail-row"><b>小穴</b> {{ store.data.角色.坂坂白.小穴 }}</div>
          <div class="detail-row"><b>胸部</b> {{ store.data.角色.坂坂白.胸部 }}</div>
          <div class="detail-row"><b>行为</b> {{ store.data.角色.坂坂白.行为 }}</div>
        </div>
      </div>

      <!-- 小水 -->
      <div v-if="store.data.角色.小水.在场" class="char-card">
        <div class="char-title">
          <span class="char-icon">&#x1f4a7;</span>
          <span class="char-name">小水</span>
          <span class="char-age">27岁</span>
          <span class="badge badge-on">在场</span>
        </div>

        <div class="char-bars">
          <div class="bar-row">
            <span class="bar-label">好感度</span>
            <div class="bar-track">
              <div class="bar-fill affection" :style="{ width: (store.data.角色.小水.好感度 / 200 * 100) + '%' }"></div>
            </div>
            <span class="bar-val">{{ store.data.角色.小水.好感度 }}/200</span>
            <span class="phase-tag">{{ affectionPhase(store.data.角色.小水.好感度).text }}</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">高潮值</span>
            <div class="bar-track">
              <div class="bar-fill arousal" :style="{ width: (store.data.角色.小水.高潮值 / 100 * 100) + '%' }"></div>
            </div>
            <span class="bar-val">{{ store.data.角色.小水.高潮值 }}/100</span>
          </div>
        </div>

        <div class="char-detail">
          <div class="detail-row"><b>角色扮演</b> {{ store.data.角色.小水.角色扮演 || '无' }}</div>
          <div class="detail-row"><b>服装</b> {{ store.data.角色.小水.服装详情 }}</div>
          <div class="detail-row"><b>情绪</b> {{ store.data.角色.小水.情绪 }}</div>
          <div class="detail-row"><b>口腔</b> {{ store.data.角色.小水.口腔 }}</div>
          <div class="detail-row"><b>小穴</b> {{ store.data.角色.小水.小穴 }}</div>
          <div class="detail-row"><b>胸部</b> {{ store.data.角色.小水.胸部 }}</div>
          <div class="detail-row"><b>行为</b> {{ store.data.角色.小水.行为 }}</div>
        </div>
      </div>

      <!-- 施梦露 -->
      <div v-if="store.data.角色.施梦露.在场" class="char-card">
        <div class="char-title">
          <span class="char-icon">&#x1f48d;</span>
          <span class="char-name">施梦露</span>
          <span class="char-age">25岁</span>
          <span class="badge badge-on">在场</span>
        </div>

        <div class="char-bars">
          <div class="bar-row">
            <span class="bar-label">好感度</span>
            <div class="bar-track">
              <div class="bar-fill affection" :style="{ width: (store.data.角色.施梦露.好感度 / 200 * 100) + '%' }"></div>
            </div>
            <span class="bar-val">{{ store.data.角色.施梦露.好感度 }}/200</span>
            <span class="phase-tag">{{ affectionPhase(store.data.角色.施梦露.好感度).text }}</span>
          </div>
          <div class="bar-row">
            <span class="bar-label">高潮值</span>
            <div class="bar-track">
              <div class="bar-fill arousal" :style="{ width: (store.data.角色.施梦露.高潮值 / 100 * 100) + '%' }"></div>
            </div>
            <span class="bar-val">{{ store.data.角色.施梦露.高潮值 }}/100</span>
          </div>
        </div>

        <div class="char-detail">
          <div class="detail-row"><b>角色扮演</b> {{ store.data.角色.施梦露.角色扮演 || '无' }}</div>
          <div class="detail-row"><b>服装</b> {{ store.data.角色.施梦露.服装详情 }}</div>
          <div class="detail-row"><b>情绪</b> {{ store.data.角色.施梦露.情绪 }}</div>
          <div class="detail-row"><b>口腔</b> {{ store.data.角色.施梦露.口腔 }}</div>
          <div class="detail-row"><b>小穴</b> {{ store.data.角色.施梦露.小穴 }}</div>
          <div class="detail-row"><b>胸部</b> {{ store.data.角色.施梦露.胸部 }}</div>
          <div class="detail-row"><b>行为</b> {{ store.data.角色.施梦露.行为 }}</div>
        </div>
      </div>

      <!-- 无角色在场提示 -->
      <div v-if="!hasAnyCharacter" class="char-card empty-hint">
        <div class="char-title">
          <span class="char-name">暂无出场角色</span>
        </div>
        <div class="char-detail">
          <div class="detail-row">等待剧情推进，角色将在出场时自动显示</div>
        </div>
      </div>

      <!-- 系统面板 -->
      <div class="sys-card">
        <div class="sys-header">
          <span class="sys-icon">&#x1f4e6;</span>
          <span class="sys-title">好感系统</span>
        </div>
        <div class="sys-points">
          当前点数
          <span class="points-val">{{ store.data.系统.点数 }}</span>
        </div>
        <div class="sys-summary">{{ store.data.系统.现状概括 || '等待剧情开始...' }}</div>
        <div class="sys-suggestions">
          <div class="sugg-card">
            <div class="sugg-label">&#x1f4a1; 常规互动</div>
            <div class="sugg-text">{{ store.data.系统.建议1 || '—' }}</div>
          </div>
          <div class="sugg-card">
            <div class="sugg-label">&#x1f525; 色情行为</div>
            <div class="sugg-text">{{ store.data.系统.建议2 || '—' }}</div>
          </div>
          <div class="sugg-card">
            <div class="sugg-label">&#x1f31f; 过激行为</div>
            <div class="sugg-text">{{ store.data.系统.建议3 || '—' }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from './store';

const store = useDataStore();

const hasAnyCharacter = computed(() =>
  store.data.角色.樱桃.在场 ||
  store.data.角色.坂坂白.在场 ||
  store.data.角色.小水.在场 ||
  store.data.角色.施梦露.在场
);

function affectionPhase(val: number): { text: string; cls: string } {
  if (val <= 50) return { text: '朋友', cls: 'phase-friend' };
  if (val <= 100) return { text: '恋人', cls: 'phase-lover' };
  return { text: '爱欲奴隶', cls: 'phase-slave' };
}
</script>

<style lang="scss" scoped>
.mvu-root {
  width: 100%;
  max-width: 720px;
  margin: 16px auto;
  font-family: 'Microsoft YaHei', sans-serif;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}

.mvu-header {
  background: linear-gradient(135deg, #2a0835 0%, #1a1a1a 100%);
  padding: 14px 20px;
  color: #FF69B4;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 2px;
}

.mvu-body {
  background: rgba(20, 6, 28, 0.97);
  padding: 14px;
}

.char-card {
  background: rgba(255, 105, 180, 0.05);
  border: 1px solid rgba(255, 105, 180, 0.18);
  border-radius: 12px;
  padding: 14px;
  margin-bottom: 10px;
}

.char-card.empty-hint {
  text-align: center;
  opacity: 0.5;
  .detail-row { color: #888; }
}

.char-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.char-icon {
  font-size: 18px;
}

.char-name {
  color: #FF69B4;
  font-size: 16px;
  font-weight: bold;
}

.char-age {
  color: #9078a0;
  font-size: 12px;
}

.badge {
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 10px;
  margin-left: auto;
}

.badge-on {
  background: rgba(0, 255, 100, 0.15);
  color: #00ff64;
}

.char-bars {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 10px;
}

.bar-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bar-label {
  color: #b8a0c0;
  font-size: 12px;
  min-width: 44px;
  text-align: right;
}

.bar-track {
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.5s ease;
}

.bar-fill.affection {
  background: linear-gradient(90deg, #FF69B4, #ff1493);
}

.bar-fill.arousal {
  background: linear-gradient(90deg, #ff6347, #ff1493);
}

.bar-val {
  color: #d8c0e0;
  font-size: 12px;
  min-width: 56px;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.phase-tag {
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 6px;
  background: rgba(255, 105, 180, 0.15);
  color: #FF69B4;
}

.char-detail {
  border-top: 1px solid rgba(255, 105, 180, 0.12);
  padding-top: 8px;
}

.detail-row {
  color: #c0a8d0;
  font-size: 12px;
  line-height: 1.7;
}

.detail-row b {
  color: #FF69B4;
  margin-right: 4px;
}

.sys-card {
  background: linear-gradient(135deg, #101820 0%, #1a2440 100%);
  border: 1px solid rgba(120, 180, 255, 0.25);
  border-radius: 12px;
  padding: 14px;
}

.sys-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.sys-icon {
  font-size: 18px;
}

.sys-title {
  color: #9fd3ff;
  font-size: 16px;
  font-weight: bold;
}

.sys-points {
  color: #c0d8f0;
  font-size: 14px;
  margin-bottom: 8px;
}

.points-val {
  color: #7CFFB2;
  font-size: 20px;
  font-weight: bold;
  margin-left: 6px;
}

.sys-summary {
  color: #d0dff0;
  font-size: 13px;
  line-height: 1.6;
  padding: 10px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  margin-bottom: 10px;
}

.sys-suggestions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
}

.sugg-card {
  background: rgba(159, 211, 255, 0.06);
  border-radius: 8px;
  padding: 10px;
}

.sugg-label {
  color: #9fd3ff;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;
}

.sugg-text {
  color: #b8cce0;
  font-size: 12px;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .sys-suggestions {
    grid-template-columns: 1fr;
  }
}
</style>
