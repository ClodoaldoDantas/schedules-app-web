import { Box, Flex, Stack, Text } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { Calendar, CloudSun, MoonStar, Sun } from 'lucide-react'

import styles from './styles.module.css'

export function SchedulesList() {
  return (
    <>
      <Flex
        component="header"
        align="flex-start"
        justify="space-between"
        mb="xl"
      >
        <Box>
          <Text c="white" component="h2" fz="h2" fw={700}>
            Sua agenda
          </Text>

          <Text>Consulte os seus cortes de cabelo agendados por dia</Text>
        </Box>

        <DateInput
          locale="pt-br"
          leftSection={<Calendar size={18} />}
          value={new Date()}
          mb="md"
        />
      </Flex>

      <Stack gap="md">
        <Box className={styles.card}>
          <Flex
            align="center"
            justify="space-between"
            py={12}
            px={20}
            className={styles.cardHeader}
          >
            <Flex align="center" gap="xs">
              <Sun size={20} />
              <Text component="span">Manhã</Text>
            </Flex>

            <Text component="span">09h-12h</Text>
          </Flex>

          <Box p={20}>
            <Flex align="center" gap="sm">
              <Text fw={700}>11:00</Text>
              <Text>Ryan Dorwart</Text>
            </Flex>
          </Box>
        </Box>

        <Box className={styles.card}>
          <Flex
            align="center"
            justify="space-between"
            py={12}
            px={20}
            className={styles.cardHeader}
          >
            <Flex align="center" gap="xs">
              <CloudSun size={20} />
              <Text component="span">Tarde</Text>
            </Flex>

            <Text component="span">13h-18h</Text>
          </Flex>

          <Box p={20}>
            <Flex align="center" gap="sm">
              <Text fw={700}>13:00</Text>
              <Text>Livia Curtis</Text>
            </Flex>

            <Flex align="center" gap="sm">
              <Text fw={700}>14:00</Text>
              <Text>Randy Calzoni</Text>
            </Flex>

            <Flex align="center" gap="sm">
              <Text fw={700}>16:00</Text>
              <Text>Marley Franci</Text>
            </Flex>

            <Flex align="center" gap="sm">
              <Text fw={700}>17:00</Text>
              <Text>Jaylon Korsgaard</Text>
            </Flex>
          </Box>
        </Box>

        <Box className={styles.card}>
          <Flex
            align="center"
            justify="space-between"
            py={12}
            px={20}
            className={styles.cardHeader}
          >
            <Flex align="center" gap="xs">
              <MoonStar size={20} />
              <Text component="span">Noite</Text>
            </Flex>

            <Text component="span">19h-21h</Text>
          </Flex>

          <Box p={20}>
            <Flex align="center" gap="sm">
              <Text fw={700}>21:00</Text>
              <Text>Maria Herwitz</Text>
            </Flex>
          </Box>
        </Box>
      </Stack>
    </>
  )
}
