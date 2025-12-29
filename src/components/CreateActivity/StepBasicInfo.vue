<template>
    <div class="form-card">
        <h2 class="form-section-title">Basic Information</h2>

        <div class="input-block">
            <label>Activity Title *</label>
            <input v-model="formData.title" type="text" placeholder="Enter activity title" />
        </div>

        <div class="input-grid">
            <div class="input-block">
                <label>Category *</label>
                <select v-model="formData.category">
                    <option value="">Select category</option>
                    <option value="workshop">Workshop</option>
                    <option value="seminar">Seminar</option>
                </select>
            </div>
            <div class="input-block">
                <label>Organization *</label>
                <select v-model="formData.organization">
                    <option value="">Select organization</option>
                    <option value="sc">Student Council</option>
                </select>
            </div>
        </div>

        <div class="input-block">
            <label>Priority Level *</label>
            <div class="priority-options">
                <label v-for="level in ['Low', 'Medium', 'High']" :key="level" class="radio-label">
                    <input type="radio" :value="level" v-model="formData.priority" />
                    <span>{{ level }}</span>
                </label>
            </div>
        </div>

        <div class="input-block">
            <label>Description *</label>
            <textarea v-model="formData.description" placeholder="Provide a detailed description of the activity"
                maxlength="5000"></textarea>
            <div class="char-counter">{{ formData.description.length }}/5000 characters</div>
        </div>

        <div class="input-block">
            <label>Objectives *</label>
            <div v-for="(obj, index) in formData.objectives" :key="'obj-' + index" class="dynamic-input-row">
                <input v-model="formData.objectives[index]" :placeholder="'Objective ' + (index + 1)" />
            </div>
            <button class="add-link-btn" @click="addObjective">+ Add Objectives</button>
        </div>

        <div class="input-block">
            <label>Expected Output *</label>
            <div v-for="(out, index) in formData.outputs" :key="'out-' + index" class="dynamic-input-row">
                <input v-model="formData.outputs[index]" :placeholder="'Expected Output ' + (index + 1)" />
            </div>
            <button class="add-link-btn" @click="addOutput">+ Add Expected Output</button>
        </div>

        <div class="form-footer">
            <button class="btn-prev-disabled" disabled>
                <i class="fas fa-arrow-left"></i> Previous
            </button>
            <button class="btn-next-blue" @click="$emit('next')">
                Next <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['formData'],
    methods: {
        addObjective() {
            this.formData.objectives.push('');
        },
        addOutput() {
            this.formData.outputs.push('');
        }
    }
}
</script>

<style scoped>
/* Typography & Container */
.form-card {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 40px;
}

.form-section-title {
    font-family: 'Playfair Display', serif;
    /* Or similar serif font */
    font-size: 1.4rem;
    margin-bottom: 30px;
    color: #1a1a1a;
}

/* Form Elements */
.input-block {
    margin-bottom: 25px;
}

.input-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

label {
    display: block;
    font-weight: 600;
    font-size: 0.85rem;
    margin-bottom: 10px;
    color: #334155;
}

input,
select,
textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #cbd5e0;
    border-radius: 8px;
    font-size: 0.95rem;
    color: #1e293b;
    background-color: #fcfcfc;
}

textarea {
    height: 140px;
    resize: none;
}

/* Radio Buttons */
.priority-options {
    display: flex;
    gap: 25px;
}

.radio-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.9rem;
}

/* Dynamic Rows & Buttons */
.dynamic-input-row {
    margin-bottom: 10px;
}

.add-link-btn {
    background: none;
    border: none;
    color: #2563eb;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0;
    margin-top: 5px;
}

.char-counter {
    text-align: left;
    font-size: 0.75rem;
    color: #64748b;
    margin-top: 6px;
}

/* Navigation Buttons */
.form-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    padding-top: 25px;
    border-top: 1px solid #f1f5f9;
}

.btn-prev-disabled {
    background: #f1f5f9;
    color: #94a3b8;
    border: 1px solid #e2e8f0;
    padding: 12px 28px;
    border-radius: 8px;
    font-weight: 600;
    cursor: not-allowed;
}

.btn-next-blue {
    background: #001ba0;
    color: white;
    border: none;
    padding: 12px 45px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
}

.btn-next-blue:hover {
    background: #001580;
}
</style>