<template>
  <div class="pagination">
    <button class="nav-btn" :disabled="currentPage === 1" @click="goToPreviousPage">
      <i class="bi bi-chevron-left"></i> Précédent
    </button>

    <span class="page-info">Page {{ currentPage }} sur {{ totalPages }}</span>

    <button class="nav-btn" :disabled="currentPage === totalPages" @click="goToNextPage">
      Suivant <i class="bi bi-chevron-right"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

const props = defineProps<PaginationProps>()

function goToPreviousPage() {
  if (props.currentPage > 1) {
    props.onPageChange(props.currentPage - 1)
  }
}

function goToNextPage() {
  if (props.currentPage < props.totalPages) {
    props.onPageChange(props.currentPage + 1)
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  min-width: 768px;
  gap: 1.5rem;
}

.nav-btn {
  background-color: #3182ce;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s ease;
}

.nav-btn:disabled {
  background-color: #a0aec0;
  cursor: not-allowed;
}

.page-info {
  font-size: 0.75rem;
}
</style>
