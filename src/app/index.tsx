import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const courses = [
{
id: '1',
name: 'Pemrograman Mobile',
lecturer: 'Pak Budi',
room: 'Lab Informatika',
day: 'Senin',
time: '08:00 - 10:00',
},
{
id: '2',
name: 'Basis Data',
lecturer: 'Bu Sinta',
room: 'Ruang 203',
day: 'Selasa',
time: '10:00 - 12:00',
},
{
id: '3',
name: 'Kecerdasan Buatan',
lecturer: 'Pak Andi',
room: 'Ruang 301',
day: 'Rabu',
time: '13:00 - 15:00',
},
];

const materials = [
{
id: '1',
title: 'React Native Dasar',
course: 'Pemrograman Mobile',
studied: true,
},
{
id: '2',
title: 'Database Normalization',
course: 'Basis Data',
studied: false,
},
{
id: '3',
title: 'Introduction to AI',
course: 'Kecerdasan Buatan',
studied: false,
},
];

const tasks = [
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

const countCourses = (data) => data.length;

const countStudiedMaterials = (data) =>
data.filter((item) => item.studied).length;

const countCompletedTasks = (data) =>
data.filter((item) => item.status === 'Selesai').length;

export default function Index() {
return ( <ScrollView style={styles.container}> <View style={styles.header}> <Text style={styles.logo}>StudyMate</Text> <Text style={styles.subtitle}>
Personal Academic Organizer </Text> </View>


  <View style={styles.content}>
    <Text style={styles.heading}>Dashboard</Text>
    <Text style={styles.description}>
      Kelola jadwal, materi, dan tugas kuliah dalam satu aplikasi.
    </Text>

    <View style={styles.summaryCard}>
      <Text style={styles.summaryText}>
        Total Mata Kuliah: {countCourses(courses)}
      </Text>
      <Text style={styles.summaryText}>
        Materi Dipelajari: {countStudiedMaterials(materials)}
      </Text>
      <Text style={styles.summaryText}>
        Tugas Selesai: {countCompletedTasks(tasks)}
      </Text>
    </View>

    <Text style={styles.sectionTitle}>1. Courses</Text>

    {courses.map((course) => (
      <View key={course.id} style={styles.card}>
        <Text style={styles.cardTitle}>{course.name}</Text>
        <Text>Dosen: {course.lecturer}</Text>
        <Text>Ruangan: {course.room}</Text>
        <Text>Hari: {course.day}</Text>
        <Text>Jam: {course.time}</Text>
      </View>
    ))}

    <Text style={styles.sectionTitle}>2. Materials</Text>

    {materials.map((item) => (
      <View key={item.id} style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text>Mata Kuliah: {item.course}</Text>
        <Text>
          Status: {item.studied ? 'Sudah Dipelajari' : 'Belum Dipelajari'}
        </Text>
      </View>
    ))}

    <Text style={styles.sectionTitle}>3. Tasks</Text>

    {tasks.map((task) => (
      <View key={task.id} style={styles.taskCard}>
        <Text style={styles.cardTitle}>{task.title}</Text>
        <Text>Mata Kuliah: {task.course}</Text>
        <Text>Deadline: {task.deadline}</Text>
        <Text>Status: {task.status}</Text>
      </View>
    ))}
  </View>
</ScrollView>

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f2f5ff',
},
header: {
backgroundColor: '#ff3dbedc',
paddingTop: 55,
paddingBottom: 25,
paddingHorizontal: 20,
},
logo: {
color: '#FFFFFF',
fontSize: 28,
fontWeight: 'bold',
},
subtitle: {
color: '#FFFFFF',
fontSize: 14,
marginTop: 5,
},
content: {
padding: 20,
},
heading: {
fontSize: 25,
fontWeight: 'bold',
marginBottom: 8,
},
description: {
color: '#666666',
lineHeight: 21,
marginBottom: 18,
},
summaryCard: {
backgroundColor: '#FFFFFF',
padding: 16,
borderRadius: 14,
marginBottom: 20,
elevation: 3,
},
summaryText: {
fontSize: 15,
marginVertical: 5,
},
sectionTitle: {
fontSize: 21,
fontWeight: 'bold',
marginTop: 12,
marginBottom: 12,
},
card: {
backgroundColor: '#FFFFFF',
padding: 16,
borderRadius: 12,
marginBottom: 12,
borderLeftWidth: 4,
borderLeftColor: '#3d91ff',
elevation: 2,
},
taskCard: {
backgroundColor: '#FFF0E2',
padding: 16,
borderRadius: 12,
marginBottom: 12,
},
cardTitle: {
color: '#c82096',
fontSize: 16,
fontWeight: 'bold',
marginBottom: 8,
},
});