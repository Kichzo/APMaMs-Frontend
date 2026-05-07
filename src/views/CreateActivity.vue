<template>
  <div class="app-container">
    <AppHeader @toggle-sidebar="toggleSidebar" :role="role" />
    <div class="dashboard-layout">
      <AppSidebar :class="{ 'sidebar-hidden': !isSidebarVisible }" />

      <main class="content">
        <div class="create-wrapper">
          <header class="page-header-inline">
            <button class="back-btn" @click="$router.push('/activity')">
              <i class="fas fa-arrow-left"></i>
            </button>
            <div class="title-text">
              <h1>New Activity</h1>
            </div>
          </header>

          <div class="form-card">
            <!-- Programs & Activities | Timeframe -->
            <div class="input-grid">
              <div class="field-column">
                <label>Programs & Activities</label>
                <div v-for="(item, index) in formData.programs" :key="'prog-'+index" class="input-block-dynamic">
                  <div class="input-with-action">
                    <input type="text" v-model="formData.programs[index]" />
                    <button v-if="formData.programs.length > 1" class="delete-btn" @click="removeRow('programs', index)" title="Remove row">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
                <button class="add-btn" @click="addRow('programs')">+ Add Row</button>
              </div>
              <div class="field-column">
                <label>Timeframe</label>
                <input type="text" v-model="formData.timeframe" />
              </div>
            </div>

            <!-- Strategic Objectives | Expected Output -->
            <div class="input-grid mt-4">
              <div class="field-column">
                <label>Strategic Objectives</label>
                <div v-for="(item, index) in formData.objectives" :key="'obj-'+index" class="input-block-dynamic">
                  <div class="input-with-action">
                    <input type="text" v-model="formData.objectives[index]" />
                    <button v-if="formData.objectives.length > 1" class="delete-btn" @click="removeRow('objectives', index)" title="Remove row">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
                <button class="add-btn" @click="addRow('objectives')">+ Add Row</button>
              </div>
              <div class="field-column">
                <label>Expected Output</label>
                <div v-for="(item, index) in formData.outputs" :key="'out-'+index" class="input-block-dynamic">
                  <div class="input-with-action">
                    <input type="text" v-model="formData.outputs[index]" />
                    <button v-if="formData.outputs.length > 1" class="delete-btn" @click="removeRow('outputs', index)" title="Remove row">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
                <button class="add-btn" @click="addRow('outputs')">+ Add Row</button>
              </div>
            </div>

            <!-- Office | Fund Source -->
            <div class="input-grid mt-4">
              <div class="field-column">
                <label>Office</label>
                <input type="text" v-model="formData.office" />
              </div>
              <div class="field-column">
                <label>Fund Source</label>
                <input type="text" v-model="formData.fundSource" />
              </div>
            </div>

            <!-- Budget Section -->
            <div class="budget-grid mt-4">
              <div class="field-column">
                <label>Line of Budget</label>
                <div v-for="(item, index) in formData.budgets" :key="'budg-line-'+index" class="input-block-dynamic">
                  <input type="text" v-model="item.lineOfBudget" />
                </div>
                <button class="add-btn" @click="addRow('budgets')">+ Add Row</button>
              </div>
              <div class="field-column">
                <label>Amount</label>
                <div v-for="(item, index) in formData.budgets" :key="'budg-amt-'+index" class="input-block-dynamic">
                  <div class="input-with-action">
                    <input type="text" v-model="item.amount" @input="calculateTotal" />
                    <button v-if="formData.budgets.length > 1" class="delete-btn" @click="removeRow('budgets', index)" title="Remove row">
                      <i class="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div class="field-column">
                <label>Total Budget</label>
                <input type="text" v-model="formData.totalBudget" readonly class="readonly-input" />
              </div>
            </div>

            <!-- Form Footer -->
            <div class="form-footer">
              <div class="spacer"></div>
              <div class="actions">
                <button class="btn-cancel" @click="$router.push('/activity')">Cancel</button>
                <button class="btn-save" @click="saveActivity">Save</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '/src/components/AppHeader.vue'
import AppSidebar from '/src/components/SideBar.vue'

export default {
  components: { AppHeader, AppSidebar },
  data() {
    return {
      role: localStorage.getItem('role') || 'org',
      isSidebarVisible: true,
      formData: {
        programs: [''],
        timeframe: '',
        objectives: [''],
        outputs: [''],
        office: '',
        fundSource: '',
        budgets: [{ lineOfBudget: '', amount: '' }],
        totalBudget: ''
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
    addRow(field) {
      if (field === 'programs') this.formData.programs.push('');
      if (field === 'objectives') this.formData.objectives.push('');
      if (field === 'outputs') this.formData.outputs.push('');
      if (field === 'budgets') this.formData.budgets.push({ lineOfBudget: '', amount: '' });
    },
    removeRow(field, index) {
      if (this.formData[field].length > 1) {
        this.formData[field].splice(index, 1);
        if (field === 'budgets') {
          this.calculateTotal();
        }
      }
    },
    calculateTotal() {
      let total = 0;
      this.formData.budgets.forEach(b => {
        let amt = parseFloat(b.amount);
        if (!isNaN(amt)) total += amt;
      });
      this.formData.totalBudget = total > 0 ? total.toString() : '';
    },
    saveActivity() {
      // Save logic
      console.log('Saved data:', this.formData);
      this.$router.push('/activity');
    }
  }
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.dashboard-layout {
  display: flex;
  flex: 1;
  width: 100%;
  overflow: hidden;
}

.content {
  flex: 1;
  padding:30px 40px;
  overflow-y: auto;
  background-color: #f8fafc;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
}

.create-wrapper {
  width: 100%;
  margin: 0;
}

.page-header-inline {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.back-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #000;
}

.title-text h1 {
  font-size: 2.2rem;
  margin: 0;
  font-weight: bold;
}

.form-card {
  background: #fdfdfd;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 40px;
}

.input-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.budget-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}

.mt-2 { margin-top: 10px; }
.mt-4 { margin-top: 30px; }

label {
  display: block;
  font-weight: bold;
  font-size: 0.95rem;
  margin-bottom: 8px;
  color: #000;
}

.sr-only {
  visibility: hidden;
  margin-bottom: 0;
  height: 0;
  display: block;
}

input {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  font-size: 0.95rem;
  box-sizing: border-box;
  background-color: #fff;
  transition: all 0.2s ease;
  outline: none;
}

input:focus {
  border-color: #3b59ff;
  box-shadow: 0 0 0 2px rgba(59, 89, 255, 0.1);
}

.readonly-input {
  background-color: #f8fafc;
  color: #4a5568;
  cursor: not-allowed;
}

.readonly-input:focus {
  border-color: #cbd5e0;
  box-shadow: none;
}

.input-block-dynamic {
  margin-bottom: 10px;
}

.input-with-action {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.delete-btn {
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 5px;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-btn:hover {
  color: #dc2626;
}

.add-btn {
  background: none;
  border: none;
  color: #3b59ff;
  font-size: 0.85rem;
  cursor: pointer;
  padding: 5px 0 0 0;
  text-align: left;
  font-weight: bold;
}

.form-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
  padding-top: 20px;
}

.actions {
  display: flex;
  gap: 15px;
}

.btn-cancel {
  background: #e2e8f0;
  color: #000;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-cancel:hover {
  background: #cbd5e0;
}

.btn-save {
  background: #00129a;
  color: white;
  border: none;
  padding: 12px 40px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-save:hover {
  background: #000c66;
}
</style>