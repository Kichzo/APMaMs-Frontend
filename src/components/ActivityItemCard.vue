<template>
  <div class="activity-item">
    <div class="card-header">
      <div class="title-group">
        <h3>Leadership Training Workshop</h3>
        <span class="badge approved">Approved</span>
        <span class="badge high">HIGH</span>
      </div>
      <button class="view-btn">View Details</button>
    </div>
    <p class="desc">Comprehensive leadership development program for student officers</p>
    
    <div class="meta-grid">
      <span><i class="far fa-building"></i> Student Council</span>
      <span><i class="far fa-calendar"></i> 18/11/2025</span>
      <span><i class="fas fa-map-marker-alt"></i> Function Hall</span>
      <span><i class="fas fa-users"></i> 50 participants</span>
    </div>

    <div class="progress-section">
      <div class="progress-labels"><span>Progress</span><span>75%</span></div>
      <div class="bar-track"><div class="bar-fill" style="width: 75%"></div></div>
    </div>

    <div class="footer-meta">
      <span>₱ 23,000</span>
      <span><i class="far fa-user"></i> By Al Christian Molina</span>
      <span><i class="far fa-clock"></i> Submitted 15/10/2025</span>
      <span class="check"><i class="fas fa-check"></i> Approved by VP Uy</span>
    </div>
  </div>
</template>

<style scoped>
.activity-item {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  margin-top: 16px;
}
.card-header { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
}

.title-group { 
  display: flex; 
  align-items: center; 
  gap: 10px; 
}

.title-group h3 { 
  font-family: serif; 
  font-size: 1.25rem; 
}

.badge { 
  font-size: 0.7rem; 
  padding: 2px 8px; 
  border-radius: 4px; 
  font-weight: bold; 
}

.approved { 
  background: #dcfce7; 
  color: #166534; 
}

.high { 
  background: #fee2e2; color: #991b1b; 
}

.view-btn { 
  background: #0a21c0; 
  color: white; 
  padding: 8px 16px; 
  border-radius: 6px; 
  border: none; 
  cursor: pointer; 
}

.meta-grid, .footer-meta { 
  display: flex; 
  gap: 20px; 
  font-size: 0.8rem; 
  color: #64748b; 
  margin-top: 15px; 
}

.footer-meta { 
  border-top: 1px solid #f1f5f9; padding-top: 15px;
}

.bar-track { 
  height: 6px; 
  background: #e2e8f0; 
  border-radius: 3px; 
  margin-top: 5px; 
}

.bar-fill { 
  height: 100%; 
  background: #0a21c0; 
  border-radius: 3px; 
  }
</style>