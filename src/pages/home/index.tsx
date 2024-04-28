import { Flex, Box } from '@mantine/core'
import styles from './styles.module.css'
import { ScheduleForm } from '../../components/schedule-form'

export function Home() {
  return (
    <Flex gap="xs" mih="calc(100vh - 2.5rem)">
      <Box className={styles.aside} component="aside" p={80} w={500}>
        <ScheduleForm />
      </Box>

      <Box component="main" py={80} px={100} flex={1}>
        {/* TODO: create shedules list */}
      </Box>
    </Flex>
  )
}
