
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

/**
 * @typedef {Object} Course
 * @property {string} id
 * @property {string} courseName
 * @property {string} lecturer
 * @property {string} room
 * @property {string} day
 * @property {string} startTime
 * @property {string} endTime
 */

/** @type {Course[]} */
const demoCourses = [
  {
    id: '1',
    courseName: 'Pemrograman Mobile',
    lecturer: 'Pak Budi',
    room: 'Lab Informatika',
    day: 'Senin',
    startTime: '08:00',
    endTime: '10:00',
  },
  {
    id: '2',
    courseName: 'Basis Data',
    lecturer: 'Bu Sinta',
    room: 'Ruang 203',
    day: 'Selasa',
    startTime: '10:00',
    endTime: '12:00',
  },
  {
    id: '3',
    courseName: 'Kecerdasan Buatan',
    lecturer: 'Pak Andi',
    room: 'Ruang 301',
    day: 'Rabu',
    startTime: '13:00',
    endTime: '15:00',
  },
];

const demoMaterials = [
  {
    id: '1',
    title: 'React Native Dasar',
    course: 'Pemrograman Mobile',
    type: 'PDF',
    studied: true,
  },
  {
    id: '2',
    title: 'Database Normalization',
    course: 'Basis Data',
    type: 'PDF',
    studied: false,
  },
  {
    id: '3',
    title: 'Introduction to AI',
    course: 'Kecerdasan Buatan',
    type: 'Video',
    studied: false,
  },
];

const demoTasks = [
  {
    id: '1',
    title: 'Mengerjakan laporan praktikum',
    course: 'Pemrograman Mobile',
    deadline: '10 Oktober 2026',
    status: 'Belum Selesai',
  },
  {
    id: '2',
    title: 'Mengerjakan ERD',
    course: 'Basis Data',
    deadline: '12 Oktober 2026',
    status: 'Selesai',
  },
  {
    id: '3',
    title: 'Membaca jurnal AI',
    course: 'Kecerdasan Buatan',
    deadline: '15 Oktober 2026',
    status: 'Belum Selesai',
  },
];

/* CUSTOM FUNCTIONS */

const countCourses = (courseList) => {
  return courseList.length;
};

const countStudiedMaterials = (materialList) => {
  return materialList.filter((material) => material.studied).length;
};

const countCompletedTasks = (taskList) => {
  return taskList.filter((task) => task.status === 'Selesai').length;
};

/* MAIN APP */

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>StudyMate</Text>
        <Text style={styles.subtitle}>
          Personal Academic Organizer
        </Text>
      </View>

      <View style={styles.content}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 8,
          }}
        >
          Dashboard
        </Text>

        <Text style={styles.description}>
          Kelola jadwal, materi, dan tugas kuliah dalam satu aplikasi.
        </Text>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryText}>
            Total Mata Kuliah: {countCourses(demoCourses)}
          </Text>
          <Text style={styles.summaryText}>
            Materi Dipelajari: {countStudiedMaterials(demoMaterials)}
          </Text>
          <Text style={styles.summaryText}>
            Tugas Selesai: {countCompletedTasks(demoTasks)}
          </Text>
        </View>

        {/* ORANG 1: COURSES */}

        <Text style={styles.sectionTitle}>
          1. Courses
        </Text>

        {demoCourses.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <Text style={styles.courseName}>
              {course.courseName}
            </Text>
            <Text>Dosen: {course.lecturer}</Text>
            <Text>Ruangan: {course.room}</Text>
            <Text>Hari: {course.day}</Text>
            <Text>
              Jam: {course.startTime} - {course.endTime}
            </Text>
          </View>
        ))}

        {/* ORANG 2: MATERIALS */}

        <Text style={styles.sectionTitle}>
          2. Materials
        </Text>

        {demoMaterials.map((material) => (
          <View key={material.id} style={styles.materialCard}>
            <Text style={styles.materialTitle}>
              {material.title}
            </Text>
            <Text>Mata Kuliah: {material.course}</Text>
            <Text>Tipe: {material.type}</Text>
            <Text>
              Status:{' '}
              {material.studied
                ? 'Sudah Dipelajari'
                : 'Belum Dipelajari'}
            </Text>
          </View>
        ))}

        {/* ORANG 3: TASKS */}

        <Text style={styles.sectionTitle}>
          3. Tasks
        </Text>

        {demoTasks.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <Text style={styles.taskTitle}>
              {task.title}
            </Text>
            <Text>Mata Kuliah: {task.course}</Text>
            <Text>Deadline: {task.deadline}</Text>
            <Text>Status: {task.status}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

/* EXTERNAL STYLES */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    backgroundColor: '#FF8A3D',
    paddingTop: 55,
    paddingBottom: 24,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
  description: {
    color: '#666666',
    marginBottom: 16,
    lineHeight: 21,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    elevation: 2,
  },
  summaryText: {
    fontSize: 15,
    marginVertical: 5,
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 12,
  },
  courseCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#FF8A3D',
    elevation: 2,
  },
  courseName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#D96520',
  },
  materialCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
  },
  materialTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  taskCard: {
    backgroundColor: '#FFF3E0',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});